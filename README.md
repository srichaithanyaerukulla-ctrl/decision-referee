# EC2 vs Lambda – Decision Helper

## Problem Statement
When choosing a cloud compute service, users often ask:
“Which approach should I use?”

Most explanations give a single answer, but in reality the choice depends on
requirements like traffic pattern, budget, and operational effort.

## Solution
This project is a simple decision-support tool that compares **AWS EC2** and
**AWS Lambda** based on user constraints.

Instead of giving one fixed recommendation, the tool:
- Collects user requirements
- Compares both options
- Explains pros, cons, and trade-offs
- Provides decision guidance

## How the Tool Works
1. The user selects:
   - Traffic pattern (steady or spiky)
   - Budget sensitivity (low or high)
2. The tool evaluates how each option aligns with these constraints.
3. It displays:
   - Pros and cons of EC2 and Lambda
   - Clear trade-offs
   - Guidance to help the user choose

## Why This Approach
There is no single “best” cloud service.
Each option involves trade-offs, and understanding them helps users make
better decisions.

This tool focuses on **helping users choose**, not just consume information.

## Technologies Used
- HTML
- CSS
- JavaScript

## Project Structure
