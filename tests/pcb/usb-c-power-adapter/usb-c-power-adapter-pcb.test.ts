import { test } from "bun:test"
import { convertKicadPcbToSvgSnapshot } from "../../fixtures/svg-snapshot-test-utils"

test("kicad-to-circuit-json: USB-C power adapter SVG snapshot", () => {
  convertKicadPcbToSvgSnapshot({
    kicadPcbPath: "tests/assets/usb-c-power-adapter.kicad_pcb",
    kicadFileName: "usb-c-power-adapter.kicad_pcb",
    testPath: import.meta.path,
    snapshotName: "usb-c-power-adapter-circuit-json",
  })
})
