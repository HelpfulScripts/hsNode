declare function exec(command: string, options?: any): Promise<{
    stdout: string;
    stderr: string;
}>;
export { exec };
