resource "aws_ecs_cluster" "cluster-fiap" {
  name = "ecs-cluster-fiap"
}

resource "aws_cloudwatch_log_group" "ecs_app_fiap_log_group" {
  name = "/ecs/my-application"
  retention_in_days = 30
}