import { test } from "bun:test"
import { convertKicadPcbToSvgSnapshot } from "../../fixtures/svg-snapshot-test-utils"

test("kicad-to-circuit-json: DDR5 testbed SVG snapshot", () => {
  convertKicadPcbToSvgSnapshot({
    kicadPcbPath: "tests/assets/ddr5-testbed.kicad_pcb",
    kicadFileName: "ddr5-testbed.kicad_pcb",
    testPath: import.meta.path,
    snapshotName: "ddr5-testbed-circuit-json",
  })
})
