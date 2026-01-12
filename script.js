function compare() {
  let traffic = document.getElementById("traffic").value;
  let budget = document.getElementById("budget").value;
  let scalability = document.getElementById("scalability").value;
  let latency = document.getElementById("latency").value;

  let ec2 = 0;
  let lambda = 0;

  // Traffic pattern
  if (traffic === "spiky") lambda++;
  else ec2++;

  // Budget sensitivity
  if (budget === "high") lambda++;
  else ec2++;

  // Scalability need
  if (scalability === "high") lambda++;
  else ec2++;

  // Latency sensitivity
  if (latency === "high") ec2++;
  else lambda++;

  document.getElementById("result").textContent = `
OPTION COMPARISON

EC2
Pros:
- Full control over environment
- Predictable performance
Cons:
- Requires server management
- Higher idle cost

AWS Lambda
Pros:
- No server management
- Automatic scaling
- Pay per execution
Cons:
- Cold start latency
- Limited runtime control

TRADE-OFFS EXPLAINED
- EC2 offers control and low latency but increases operational effort.
- Lambda simplifies operations and scaling but sacrifices flexibility and may introduce cold starts.

DECISION GUIDANCE (Not a Recommendation)
${
  lambda > ec2
    ? "Your constraints lean toward AWS Lambda for scalability and lower operations."
    : "Your constraints lean toward EC2 for control and predictable performance."
}
`;
}
