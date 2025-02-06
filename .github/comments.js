// Create web server to receive GitHub webhook events
const { Octokit } = require("@octokit/rest");
const { request } = require("@octokit/request");
const { createNodeMiddleware, createProbot } = require("probot");
const { Probot } = require("probot");
const { EOL } = require("os");
const { readFileSync, writeFileSync } = require("fs");
const {
  addLabels,
  getIssueNumber,
  getPrTitle,
  getPullRequest,
  getRepoInfo,
} = require("./utils");
