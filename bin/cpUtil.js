"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cp = require('child_process');
function exec(command, options) {
    return new Promise((resolve, reject) => {
        cp.exec(command, options, (error, stdout, stderr) => {
            error ? reject(error) : resolve({ stdout: stdout, stderr: stderr });
        });
    });
}
exports.exec = exec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NwVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sRUFBRSxHQUFNLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQTRCdkMsY0FBYyxPQUFjLEVBQUUsT0FBWTtJQUN0QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBcUQsRUFBRSxNQUF1QixFQUFFLEVBQUU7UUFDbEcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsS0FBWSxFQUFFLE1BQWEsRUFBRSxNQUFhLEVBQUUsRUFBRTtZQUNyRSxLQUFLLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVRLG9CQUFJIn0=