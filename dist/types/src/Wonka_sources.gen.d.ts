import { list } from '../src/shims/ReasonPervasives.shim';
import { observerT as Wonka_types_observerT } from './Wonka_types.gen';
import { sinkT as Wonka_types_sinkT } from './Wonka_types.gen';
import { sourceT as Wonka_types_sourceT } from './Wonka_types.gen';
import { subjectT as Wonka_types_subjectT } from './Wonka_types.gen';
import { teardownT as Wonka_types_teardownT } from './Wonka_types.gen';
export declare const fromArray: <a>(_1: a[]) => Wonka_types_sourceT<a>;
export declare const fromList: <a>(_1: list<a>) => Wonka_types_sourceT<a>;
export declare const fromValue: <a>(_1: a) => Wonka_types_sourceT<a>;
export declare const make: <a>(
  _1: (_1: Wonka_types_observerT<a>) => Wonka_types_teardownT
) => Wonka_types_sourceT<a>;
export declare const makeSubject: <a>(_1: void) => Wonka_types_subjectT<a>;
export declare const makeReplaySubject: <a>(_1: number) => Wonka_types_subjectT<a>;
export declare const empty: <a>(_1: Wonka_types_sinkT<a>) => void;
export declare const never: <a>(_1: Wonka_types_sinkT<a>) => void;
