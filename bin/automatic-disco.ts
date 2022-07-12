#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AutomaticDiscoStack } from '../lib/automatic-disco-stack';

const app = new cdk.App();
new AutomaticDiscoStack(app, 'AutomaticDiscoStack', {
  env: {
    account: app.account,
    region: 'us-west-2'
  }
});