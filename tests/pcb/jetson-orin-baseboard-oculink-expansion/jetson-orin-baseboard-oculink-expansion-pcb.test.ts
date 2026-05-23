import { test } from "bun:test"
import { convertKicadPcbToSvgSnapshot } from "../../fixtures/svg-snapshot-test-utils"

test("kicad-to-circuit-json: Jetson Orin baseboard OCuLink expansion SVG snapshot", () => {
  convertKicadPcbToSvgSnapshot({
    kicadPcbPath:
      "tests/assets/jetson-orin-baseboard-oculink-expansion.kicad_pcb",
    kicadFileName: "jetson-orin-baseboard-oculink-expansion.kicad_pcb",
    testPath: import.meta.path,
    snapshotName: "jetson-orin-baseboard-oculink-expansion-circuit-json",
  })
})
