import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class AutomaticDiscoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    


    const vpc = new ec2.Vpc(this, 'VPC', {
      subnetConfiguration: [{
        cidrMask: 24,
        name: 'Public',
        subnetType: ec2.SubnetType.PUBLIC
      }]
    });

    // const PrivateSubnetA = new ec2.Subnet(this, 'PrivateSubnetA', {
    //   vpcId: vpc.vpcId,
    //   cidrBlock: '10.0.0.64/26',
    //   availabilityZone: 'us-west-2a'
    // });

    // const privateSubnetB = new ec2.Subnet(this, 'privateSubnetB', {
    //   vpcId: vpc.vpcId,
    //   cidrBlock: '10.0.0.128/26',
    //   availabilityZone: 'us-west-2b'
    // });

  }
}
