public virtual class Animal extends LivingBeing {
    protected void show(){
        System.debug('Number is : '+s);
    }
    
    public virtual void move() {
        System.debug('Animal is moving');
    }
}