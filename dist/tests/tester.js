const testInfo = {
    started: false,
    passed: 0,
    failed: 0,
    tests: new Set()
};
export function test(name, action) {
    if (!testInfo.started) {
        testInfo.started = true;
        setTimeout(() => console.log(`✔️  ${testInfo.passed} passed, ${testInfo.failed} failed`), 1);
    }
    if (!testInfo.tests.has(name))
        testInfo.tests.add(name);
    else
        throw new Error(`Test ${name} already exists`);
    try {
        action();
        testInfo.passed++;
        console.log(`✅ ${name}: passed`);
    }
    catch (e) {
        testInfo.failed++;
        console.error(`❌ ${name}: ${e}`);
    }
}
//# sourceMappingURL=tester.js.map