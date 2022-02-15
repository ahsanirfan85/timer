let inputs = process.argv.slice(2);

for (const input of inputs) {
  if (input && input >= 0 && typeof input === 'number') {
    setTimeout(() => process.stdout.write('\x07'), input * 1000);
  }
}