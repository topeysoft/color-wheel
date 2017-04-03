import { ColorWheel } from "./wheel";

describe('Canvas Wheel', () => {
    it('should be initialized', () => {
        var wheel = new ColorWheel();
        expect(wheel).toBeTruthy();
    })
})