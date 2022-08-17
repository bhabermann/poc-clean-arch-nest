export abstract class Mapper<In, Out> {
    abstract mapFrom(param: In): Out;
    abstract mapTo(param: Out): In;
}