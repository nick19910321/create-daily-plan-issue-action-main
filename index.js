const core = require("@actions/core");
const github = require("@actions/github");
const dayjs = require("dayjs");

(function main() {
  const token = core.getInput("token");
  const octokit = github.getOctokit(token);

  createIssue(octokit);
})();

function createIssue(octokit) {
  octokit.rest.issues.create({
    owner: "nick19910321",
    repo: "study-every-day",
    title: getTitle(),
    body: getBody(),
  });
}

function getBody() {
  return "[如何提问 不要抽象](https://github.com/nick19910321/study-every-day#readme)";
}

function getTitle() {
  return `【每日计划】 ${getDate()}`;
}

function getDate() {
  // 运行环境是 UTC 时区
  // 需要转换成 中国时区
  // 中国时区 = UTC时区 + 8小时
  return dayjs().add("8", "hour").format("YYYY-MM-DD");
}
