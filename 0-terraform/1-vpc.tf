resource "aws_vpc" "testing" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "testing-vpc"
    Environment = "testing"
  }
}

output "testing_vpc_id" {
  value       = aws_vpc.testing.id
  description = "ID of the new testing VPC"
}

output "testing_vpc_cidr" {
  value       = aws_vpc.testing.cidr_block
  description = "CIDR block of the new testing VPC"
}