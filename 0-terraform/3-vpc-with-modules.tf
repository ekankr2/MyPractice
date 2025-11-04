# Example 1: Create a testing VPC using the module
module "testing_vpc" {
  source = "./modules/vpc"

  environment          = "testing"
  vpc_cidr             = "10.0.0.0/16"
  availability_zones   = ["ap-northeast-2a", "ap-northeast-2b", "ap-northeast-2c"]
  public_subnet_cidrs  = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
}

# Example 2: Create a production VPC using the same module
# (Commented out - uncomment to create a second VPC)
# module "prod_vpc" {
#   source = "./modules/vpc"
#
#   environment          = "prod"
#   vpc_cidr             = "10.1.0.0/16"
#   availability_zones   = ["ap-northeast-2a", "ap-northeast-2b", "ap-northeast-2c"]
#   public_subnet_cidrs  = ["10.1.1.0/24", "10.1.2.0/24", "10.1.3.0/24"]
# }

# Outputs - exposing values from the module
output "testing_vpc_id" {
  description = "ID of the testing VPC"
  value       = module.testing_vpc.vpc_id
}

output "testing_vpc_cidr" {
  description = "CIDR block of the testing VPC"
  value       = module.testing_vpc.vpc_cidr
}

output "testing_public_subnet_ids" {
  description = "IDs of the testing public subnets"
  value       = module.testing_vpc.public_subnet_ids
}

output "testing_internet_gateway_id" {
  description = "ID of the testing Internet Gateway"
  value       = module.testing_vpc.internet_gateway_id
}

# Example: Using the module output in another resource
# resource "aws_instance" "server" {
#   ami           = "ami-04f167a56786e4b09"
#   instance_type = "t2.micro"
#   subnet_id     = module.testing_vpc.public_subnet_ids[0]  # Use first subnet
#
#   tags = {
#     Name = "testing-server"
#   }
# }