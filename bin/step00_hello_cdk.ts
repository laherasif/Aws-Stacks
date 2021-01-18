#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MyCdkStack } from '../lib/step00_hello_cdk-stack';

const app = new cdk.App();
new MyCdkStack(app, 'MyCdkStack');
