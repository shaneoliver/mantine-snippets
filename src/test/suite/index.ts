/* eslint-disable @typescript-eslint/semi */
import glob from 'glob'
import Mocha from 'mocha'
import NYC from 'nyc'
import path from 'path'

export async function run(): Promise<void> {
  const nyc = new NYC()
  await nyc.createTempDirectory()
  // Create the mocha test
  const mocha = new Mocha({
    ui: 'tdd',
  })
  mocha.useColors(true)

  const testsRoot = path.resolve(__dirname, '..')

  const files: Array<string> = await new Promise((resolve, reject) => {
    glob(
      '**/**.test.js',
      {
        cwd: testsRoot,
      },
      // eslint-disable-next-line @typescript-eslint/no-shadow
      (err, files) => {
        if (err) reject(err)
        else resolve(files)
      }
    )
  })

  // Add files to the test suite
  files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)))

  const failures: number = await new Promise((resolve) => {
    mocha.run(resolve)
  })
  await nyc.writeCoverageFile()

  if (failures > 0) {
    throw new Error(`${failures} tests failed.`)
  }
}
