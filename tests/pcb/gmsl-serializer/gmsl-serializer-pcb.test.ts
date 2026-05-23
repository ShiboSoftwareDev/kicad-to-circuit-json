import { test } from "bun:test"
import { convertKicadPcbToSvgSnapshot } from "../../fixtures/svg-snapshot-test-utils"

test("kicad-to-circuit-json: GMSL serializer SVG snapshot", () => {
  convertKicadPcbToSvgSnapshot({
    kicadPcbPath: "tests/assets/gmsl-serializer.kicad_pcb",
    kicadFileName: "gmsl-serializer.kicad_pcb",
    testPath: import.meta.path,
    snapshotName: "gmsl-serializer-circuit-json",
  })
})
