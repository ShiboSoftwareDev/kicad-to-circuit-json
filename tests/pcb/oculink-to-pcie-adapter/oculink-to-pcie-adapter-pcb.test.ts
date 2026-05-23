import { test } from "bun:test"
import { convertKicadPcbToSvgSnapshot } from "../../fixtures/svg-snapshot-test-utils"

test("kicad-to-circuit-json: OCuLink to PCIe adapter SVG snapshot", () => {
  convertKicadPcbToSvgSnapshot({
    kicadPcbPath: "tests/assets/oculink-to-pcie-adapter.kicad_pcb",
    kicadFileName: "oculink-to-pcie-adapter.kicad_pcb",
    testPath: import.meta.path,
    snapshotName: "oculink-to-pcie-adapter-circuit-json",
  })
})
