import { test } from "bun:test"
import { convertKicadPcbToSvgSnapshot } from "../../fixtures/svg-snapshot-test-utils"

test("kicad-to-circuit-json: SDI fiber adapter SVG snapshot", () => {
  convertKicadPcbToSvgSnapshot({
    kicadPcbPath: "tests/assets/sdi-fiber-adapter.kicad_pcb",
    kicadFileName: "sdi-fiber-adapter.kicad_pcb",
    testPath: import.meta.path,
    snapshotName: "sdi-fiber-adapter-circuit-json",
  })
})
