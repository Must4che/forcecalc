# forcecalc

This is a simple CLI tool that I created for my colleagues from Salesforce-trainers group. It simply caclculates weighted average from partial Exam scores 3 salesforce developer exams. But feel free to use this tools --edit flag to edit exams.json (add/remove/modify exams). It is not prefect and I mostly just used this Package to try out some NodeJS features.

## Compatibility

Currently this package is only supported Windows, Mac and Linux.

## Installation

```console
npm install -g forcecalc
```

## Quick Start

```console
forcecalc
```

This launches the main. You will be prompted with everything you need to Calculate your Final Exam Score.

## Edit Exams

```console
forcecalc --edit
```

This feature opens json file with all exam data. You can modify and add new Exams. All exams do have topics and there you can find a topics name and weight. NOTE: You can not mofify calculation formula only data passed there.

## GitHub

https://github.com/Must4che/forcecalc