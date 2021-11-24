const sade = require('sade');
const prog = sade('ossync');
const sync = require('./sync');
const version = '1.0.1';

prog.version(`v${version}. Copyright 2021 Kaadon.`)
    .describe(`ossync v${version}. Copyright 2021 Kaadon`);

prog.command('sync')
    .describe('Sync files.')
    .option('-c, --config', 'Specify config file', '.ossync.config')
    .option('-i, --ignore', 'Specify ignore file', '.ossync.ignore')
    .option('-f, --force', 'Force re-sync all files', false)
    .option('-d, --dry', 'Dry run', false)
    .action(opts => {
        sync(opts);
    });

prog.command('update')
    .describe('Check new version of ossync.')
    .action(() => {
        console.log('Not implemented yet');
    });

prog.parse(process.argv);


