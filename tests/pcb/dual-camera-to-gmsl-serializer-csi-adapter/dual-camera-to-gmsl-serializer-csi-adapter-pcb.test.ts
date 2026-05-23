import { test } from "bun:test"
import { convertKicadPcbToSvgSnapshot } from "../../fixtures/svg-snapshot-test-utils"

test("kicad-to-circuit-json: dual camera to GMSL serializer CSI adapter SVG snapshot", () => {
  convertKicadPcbToSvgSnapshot({
    kicadPcbPath:
      "tests/assets/dual-camera-to-gmsl-serializer-csi-adapter.kicad_pcb",
    kicadFileName: "dual-camera-to-gmsl-serializer-csi-adapter.kicad_pcb",
    testPath: import.meta.path,
    snapshotName: "dual-camera-to-gmsl-serializer-csi-adapter-circuit-json",
  })
})
