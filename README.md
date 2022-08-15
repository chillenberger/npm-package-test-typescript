# Shared Components
### This repository will house UI components hosted on AWS CodeArtifact to be used across apps

## Create AWS Resources
AWS resources are made using [AWS Serverless Application Model CLI](https://aws.amazon.com/serverless/sam/).

template.yaml was created from [library-reference-data](https://github.com/Smart-Warehousing/library-reference-data/tree/swat-281-testing#library-reference-data) POC.  It creates resource domain and repository.  If the desired domain and repository is already created, you do not need to redeploy. 


## Connect to AWS CodeArtifact repository
First the user must be logged into the correct aws sso profile.  Do this by running `aws sso login --profile <desired environment>`.

Then connect to the npm registry with `npm run co:login`. 

Verify the desired registry is being used by running the command `npm -d ping`. 
you should see `npm notice PING https://YOUR DOMAIN - ACCOUNT NUMBER.d.codeartifact. YOUR REGION .amazonaws.com/npm/YOUR REPOSITORY /`

To change back to the default npm registry use `npm config set registry https://registry.npmjs.com/`

REF: [AWS](https://docs.aws.amazon.com/codeartifact/latest/ug/npm-auth.html)

## Build Dist File
The dist file is the project build output.  To perform a new build run the command `npm build`.
This will clean the dist folder and rebuild the library. 

## Publishing
As of now, to publish the developer must increment the version in package.json then use npm publish.  This will publish the contents of the dist folder, package.json, and readme.md. 

## Development
Since this is a component library, and not a deployable webapp, we cannot use react start to see our work as we develope.  Instead we use [Storybook ](https://storybook.js.org/) to view components.  

To view the component components, in your folder, create a `<YOUR COMPONENT>.story.tsx` file.  Use another story as a template to create your story.  Once completed run the command `npm run storybook`.  Your component will be visible at the localhost:6006. 

