import { test } from "bun:test"
import { convertKicadPcbToSvgSnapshot } from "../../fixtures/svg-snapshot-test-utils"

test("kicad-to-circuit-json: HDMI EDID debug board SVG snapshot", () => {
  convertKicadPcbToSvgSnapshot({
    kicadPcbPath: "tests/assets/hdmi-edid-debug-board.kicad_pcb",
    kicadFileName: "hdmi-edid-debug-board.kicad_pcb",
    testPath: import.meta.path,
    snapshotName: "hdmi-edid-debug-board-circuit-json",
  })
})
