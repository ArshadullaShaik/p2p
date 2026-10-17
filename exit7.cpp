extern "C" void _start() {
    asm(
        "mov x8, #93\n"
        "mov x0, #7\n"
        "svc #0"
    );
}