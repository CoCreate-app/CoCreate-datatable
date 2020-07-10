<<<<<<< HEAD
# Contributing to CoCreate-dataTable

This project is work of [many contributors](https://github.com/CoCreate-app/CoCreate-adminUI/graphs/contributors).
You're encouraged to submit [pull requests](https://github.com/CoCreate-app/CoCreate-adminUI/pulls),
[propose features and discuss issues](https://github.com/CoCreate-app/CoCreate-adminUI/issues).
=======
# Contributing to CoCreateJS

This project is work of [many contributors](https://github.com/CoCreate-app/CoCreate-datatables/graphs/contributors).
You're encouraged to submit [pull requests](https://github.com/CoCreate-app/CoCreate-datatables/pulls),
[propose features and discuss issues](https://github.com/CoCreate-app/CoCreate-datatables/issues).
>>>>>>> edc0e3593aa79b00c5db57728a4ff0fc0ebc5414

In the examples below, substitute your Github username for `contributor` in URLs.

## Fork the Project

<<<<<<< HEAD
Fork the [project on Github](https://github.com/CoCreate-app/CoCreate-dataTable) and check out your copy.

```
git clone https://github.com/contributor/CoCreate-dataTable.git
cd CoCreate-dataTable
git remote add upstream https://github.com/CoCreate-app/CoCreate-dataTable.git
=======
Fork the [project on Github](https://github.com/CoCreate-app/CoCreateJS) and check out your copy.

```
git clone https://github.com/contributor/CoCreateJS.git
cd CoCreateJS
git remote add upstream https://github.com/CoCreate-app/CoCreateJS.git
>>>>>>> edc0e3593aa79b00c5db57728a4ff0fc0ebc5414
```

## Create a Topic Branch

Make sure your fork is up-to-date and create a topic branch for your feature or bug fix.

```
git checkout master
git pull upstream master
git checkout -b my-feature-branch
```

<<<<<<< HEAD
=======
## Bundle Install and Test

Ensure that you can build the project and run tests.

```
bundle install
bundle exec rake
```

>>>>>>> edc0e3593aa79b00c5db57728a4ff0fc0ebc5414
## Write Tests

Try to write a test that reproduces the problem you're trying to fix or describes a feature that you want to build.
Add to [spec](spec).

We definitely appreciate pull requests that highlight or reproduce a problem, even without a fix.

## Write Code

Implement your feature or bug fix.

## Write Documentation

Document any external behavior in the [README](README.md).

## Update Changelog

Add a line to [CHANGELOG](CHANGELOG.md) under *Next Release*.
Make it look like every other line, including your name and link to your Github account.

## Commit Changes

Make sure git knows your name and email address:

```
git config --global user.name "Your Name"
git config --global user.email "contributor@example.com"
```

Writing good commit logs is important. A commit log should describe what changed and why.

```
git add ...
git commit
```

## Push

```
git push origin my-feature-branch
```

## Make a Pull Request

<<<<<<< HEAD
Go to [https://github.com/CoCreate-app/CoCreate-adminUI](https://github.com/CoCreate-app/CoCreate-adminUI) and select your feature branch.
=======
Go to [https://github.com/CoCreate-app/CoCreate-datatables](https://github.com/CoCreate-app/CoCreate-datatables) and select your feature branch.
>>>>>>> edc0e3593aa79b00c5db57728a4ff0fc0ebc5414
Click the 'Pull Request' button and fill out the form. Pull requests are usually reviewed within a few days.

## Rebase

If you've been working on a change for a while, rebase with upstream/master.

```
git fetch upstream
git rebase upstream/master
git push origin my-feature-branch -f
```

## Update CHANGELOG Again

Update the [CHANGELOG](CHANGELOG.md) with the pull request number. A typical entry looks as follows.

```
<<<<<<< HEAD
* [#123](https://github.com/CoCreate-app/CoCreate-adminUI/pull/123): Reticulated splines - [@contributor](https://github.com/contributor).
=======
* [#123](https://github.com/CoCreate-app/CoCreate-datatables/pull/123): Reticulated splines - [@contributor](https://github.com/contributor).
>>>>>>> edc0e3593aa79b00c5db57728a4ff0fc0ebc5414
```

Amend your previous commit and force push the changes.

```
git commit --amend
git push origin my-feature-branch -f
```

## Check on Your Pull Request

Go back to your pull request after a few minutes and see whether it passed muster with Travis-CI. Everything should look green, otherwise fix issues and amend your commit as described above.

## Be Patient

It's likely that your change will not be merged and that the nitpicky maintainers will ask you to do more, or fix seemingly benign problems. Hang on there!

## Thank You

Please do know that we really appreciate and value your time and work. We love you, really.