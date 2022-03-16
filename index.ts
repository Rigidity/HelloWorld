abstract class IHelloWorldProvider {
    public abstract printHelloWorldToTheConsoleProvider(): () => void;
}

class HelloWorldProvider extends IHelloWorldProvider {
    public static instance: HelloWorldProvider = new HelloWorldProvider();

    public printHelloWorldToTheConsoleProvider(): () => void {
        return HelloWorldProvider.instance.printHelloWorldToTheConsole;
    }

    public printHelloWorldToTheConsole(): void {
        if (!console)
            throw new Error("The console doesn't exist for some reason.");
        console.log('Hello, world!');
    }
}

const helloWorldProvider: HelloWorldProvider = new HelloWorldProvider();

helloWorldProvider.printHelloWorldToTheConsoleProvider.bind(
    helloWorldProvider
)()();

helloWorldProvider.printHelloWorldToTheConsoleProvider.bind(
    helloWorldProvider
)()();
