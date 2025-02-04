const fs = require("fs")
const archiver = require("archiver")

console.log("Creating zip file...")

const output = fs.createWriteStream("sudeep-polymers-static.zip")
const archive = archiver("zip", {
  zlib: { level: 9 }, // Sets the compression level.
})

output.on("close", () => {
  console.log(archive.pointer() + "total bytes")
  console.log("Zip file created successfully.")
})

archive.on("error", (err) => {
  throw err
})

archive.pipe(output)

// Add the contents of the out directory to the zip
archive.directory("out/", false)

archive.finalize()

