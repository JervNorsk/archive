import {Injector, NgModule} from "@angular/core";
import {NgxThreeModule} from "ngx-three";
import {JnThGrid} from "./utils/grid/jn-th-grid.component";
import {JnThPrefabWavePoint} from "./prefabs/wave/jn-th-prefab-wave-point.component";
import {JnThScene} from "./scenes/jn-th-scene.component";

@NgModule({
    declarations: [
        JnThScene,
        JnThGrid,
        JnThPrefabWavePoint
    ],
    imports: [
        // Module
        // -------------------------------------------------------------------------------------------------------------

        // Lib
        // -------------------------------------------------------------------------------------------------------------
        NgxThreeModule

        // Framework
        // -------------------------------------------------------------------------------------------------------------
    ],
    exports: [
        // Module
        // -------------------------------------------------------------------------------------------------------------
        JnThScene,
        JnThGrid,
        JnThPrefabWavePoint,

        // Lib
        // -------------------------------------------------------------------------------------------------------------
        NgxThreeModule

        // Framework
        // -------------------------------------------------------------------------------------------------------------
    ],
    providers: []
})
export class JnThModule {

    static injector: Injector;

    constructor(
        private injector: Injector
    ) {
        JnThModule.injector = injector;
    }
}
