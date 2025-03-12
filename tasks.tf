resource "aws_ecs_task_definition" "my_application" {
  family                   = "my_application"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = aws_iam_role.ecs_task_execution_role.arn

  container_definitions = jsonencode([
    {
      name      = "my_application-container"
      #image     = "nginx:latest"
      image     = "593793025033.dkr.ecr.us-east-1.amazonaws.com/my-app-fiap-ci-cd:latest"
      essential = true
      cpu       = 256
      memory    = 512
      portMappings = [
        {
          containerPort = 80
          hostPort      = 80
        }
      ]
      # Remova a configuração de log se não quiser usar o CloudWatch Logs
      # logConfiguration = {
      #   logDriver = "awslogs"
      #   options = {
      #     awslogs-group         = "/ecs/my_application"
      #     awslogs-region        = "us-east-1"
      #     awslogs-stream-prefix = "ecs"
      #   }
      # }
    }
  ])
}

resource "aws_ecs_service" "my_application_service" {
  name            = "my_application_service"
  cluster         = aws_ecs_cluster.my_cluster.id
  task_definition = aws_ecs_task_definition.my_application.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = [aws_subnet.public_subnet_1a.id, aws_subnet.public_subnet_1b.id]
    security_groups  = [aws_security_group.ecs_sg.id]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.my_target_group.arn
    container_name   = "my_application-container"
    container_port   = 80
  }

  depends_on = [
    aws_lb_listener.my_listener
  ]
}