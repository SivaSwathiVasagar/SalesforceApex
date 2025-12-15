public class PracticeChildClass extends PracticeParentClass {
    public PracticeChildClass() {
        System.debug('Child Constructor');
    }

    public override void greet() {
        System.debug('Hello from Child');
    }

    public void childOnlyMethod() {
        System.debug('This is child-specific method');
    }
}