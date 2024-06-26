#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .argument('<file1>', 'path to file 1')
  .argument('<file2>', 'path to file 2')
   .option('-f, --format <type>', 'output format')
   .action((filepath1, filepath2) => {
     const formatName = program.opts().format;
     const diff = genDiff(filepath1, filepath2, formatName);
     console.log(diff);
   });

program.parse(process.argv);
