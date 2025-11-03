resource "aws_vpc" "testing" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "testing-vpc"
    Environment = "testing"
  }
}

# Internet Gateway
resource "aws_internet_gateway" "testing_igw" {
  vpc_id = aws_vpc.testing.id

  tags = {
    Name        = "testing-igw"
    Environment = "testing"
  }
}

# Public Subnet 1 (ap-northeast-2a)
resource "aws_subnet" "public_1" {
  vpc_id                  = aws_vpc.testing.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "ap-northeast-2a"
  map_public_ip_on_launch = true

  tags = {
    Name        = "testing-public-subnet-1"
    Environment = "testing"
  }
}

# Public Subnet 2 (ap-northeast-2b)
resource "aws_subnet" "public_2" {
  vpc_id                  = aws_vpc.testing.id
  cidr_block              = "10.0.2.0/24"
  availability_zone       = "ap-northeast-2b"
  map_public_ip_on_launch = true

  tags = {
    Name        = "testing-public-subnet-2"
    Environment = "testing"
  }
}

# Public Subnet 3 (ap-northeast-2c)
resource "aws_subnet" "public_3" {
  vpc_id                  = aws_vpc.testing.id
  cidr_block              = "10.0.3.0/24"
  availability_zone       = "ap-northeast-2c"
  map_public_ip_on_launch = true

  tags = {
    Name        = "testing-public-subnet-3"
    Environment = "testing"
  }
}

# Import existing route table
import {
  to = aws_route_table.public
  id = "rtb-07d98791cd30c56d3"
}

# Public Route Table (existing)
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.testing.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.testing_igw.id
  }

  tags = {
    Name        = "testing-public-rt"
    Environment = "testing"
  }
}

# Route Table Association for Subnet 1
resource "aws_route_table_association" "public_1" {
  subnet_id      = aws_subnet.public_1.id
  route_table_id = aws_route_table.public.id
}

# Route Table Association for Subnet 2
resource "aws_route_table_association" "public_2" {
  subnet_id      = aws_subnet.public_2.id
  route_table_id = aws_route_table.public.id
}

# Route Table Association for Subnet 3
resource "aws_route_table_association" "public_3" {
  subnet_id      = aws_subnet.public_3.id
  route_table_id = aws_route_table.public.id
}

# Outputs
output "testing_vpc_id" {
  value       = aws_vpc.testing.id
  description = "ID of the new testing VPC"
}

output "testing_vpc_cidr" {
  value       = aws_vpc.testing.cidr_block
  description = "CIDR block of the new testing VPC"
}

output "public_subnet_ids" {
  value       = [aws_subnet.public_1.id, aws_subnet.public_2.id, aws_subnet.public_3.id]
  description = "IDs of the public subnets"
}

output "internet_gateway_id" {
  value       = aws_internet_gateway.testing_igw.id
  description = "ID of the Internet Gateway"
}