import { callbagT as Wonka_callbag_callbagT } from './Wonka_callbag.gen';
import { element as Dom_element } from '../../src/shims/Dom.shim';
import { event as Dom_event } from '../../src/shims/Dom.shim';
import { observableT as Wonka_observable_observableT } from './Wonka_observable.gen';
import { operatorT as Wonka_types_operatorT } from '../../src/Wonka_types.gen';
import { sourceT as Wonka_types_sourceT } from '../../src/Wonka_types.gen';
export declare const fromObservable: <T1>(
  _1: Wonka_observable_observableT<T1>
) => Wonka_types_sourceT<T1>;
export declare const toObservable: <T1>(
  _1: Wonka_types_sourceT<T1>
) => Wonka_observable_observableT<T1>;
export declare const fromCallbag: <T1>(_1: Wonka_callbag_callbagT<T1>) => Wonka_types_sourceT<T1>;
export declare const toCallbag: <T1>(_1: Wonka_types_sourceT<T1>) => Wonka_callbag_callbagT<T1>;
export declare const debounce: <a>(_1: (_1: a) => number) => Wonka_types_operatorT<a, a>;
export declare const delay: <a>(_1: number) => Wonka_types_operatorT<a, a>;
export declare const throttle: <a>(_1: (_1: a) => number) => Wonka_types_operatorT<a, a>;
export declare const toPromise: <a>(_1: Wonka_types_sourceT<a>) => Promise<a>;
export declare const interval: (_1: number) => Wonka_types_sourceT<number>;
export declare const fromDomEvent: (_1: Dom_element, _2: string) => Wonka_types_sourceT<Dom_event>;
export declare const fromPromise: <a>(_1: Promise<a>) => Wonka_types_sourceT<a>;
