import { operatorT as Wonka_types_operatorT } from './Wonka_types.gen';
import { sourceT as Wonka_types_sourceT } from './Wonka_types.gen';
export declare const buffer: <a, b>(_1: Wonka_types_sourceT<a>) => Wonka_types_operatorT<b, b[]>;
export declare const combine: <a, b>(
  _1: Wonka_types_sourceT<a>,
  _2: Wonka_types_sourceT<b>
) => Wonka_types_sourceT<[a, b]>;
export declare const concatMap: <a, b>(
  _1: (_1: a) => Wonka_types_sourceT<b>
) => Wonka_types_operatorT<a, b>;
export declare const concatAll: <a>(
  _1: Wonka_types_sourceT<Wonka_types_sourceT<a>>
) => Wonka_types_sourceT<a>;
export declare const concat: <a>(_1: Wonka_types_sourceT<a>[]) => Wonka_types_sourceT<a>;
export declare const filter: <a>(_1: (_1: a) => boolean) => Wonka_types_operatorT<a, a>;
export declare const map: <a, b>(_1: (_1: a) => b) => Wonka_types_operatorT<a, b>;
export declare const mergeMap: <a, b>(
  _1: (_1: a) => Wonka_types_sourceT<b>
) => Wonka_types_operatorT<a, b>;
export declare const merge: <a>(_1: Wonka_types_sourceT<a>[]) => Wonka_types_sourceT<a>;
export declare const mergeAll: <a>(
  _1: Wonka_types_sourceT<Wonka_types_sourceT<a>>
) => Wonka_types_sourceT<a>;
export declare const flatten: <T1>(
  _1: Wonka_types_sourceT<Wonka_types_sourceT<T1>>
) => Wonka_types_sourceT<T1>;
export declare const onEnd: <a>(_1: () => void) => Wonka_types_operatorT<a, a>;
export declare const onPush: <a>(_1: (_1: a) => void) => Wonka_types_operatorT<a, a>;
export declare const tap: <T1>(_1: (_1: T1) => void) => Wonka_types_operatorT<T1, T1>;
export declare const onStart: <a>(_1: () => void) => Wonka_types_operatorT<a, a>;
export declare const sample: <a, b>(_1: Wonka_types_sourceT<a>) => Wonka_types_operatorT<b, b>;
export declare const scan: <a, acc>(
  _1: (_1: acc, _2: a) => acc,
  _2: acc
) => Wonka_types_operatorT<a, acc>;
export declare const share: <a>(_1: Wonka_types_sourceT<a>) => Wonka_types_sourceT<a>;
export declare const skip: <a>(_1: number) => Wonka_types_operatorT<a, a>;
export declare const skipUntil: <a, b>(_1: Wonka_types_sourceT<a>) => Wonka_types_operatorT<b, b>;
export declare const skipWhile: <a>(_1: (_1: a) => boolean) => Wonka_types_operatorT<a, a>;
export declare const switchMap: <a, b>(
  _1: (_1: a) => Wonka_types_sourceT<b>
) => Wonka_types_operatorT<a, b>;
export declare const switchAll: <a>(
  _1: Wonka_types_sourceT<Wonka_types_sourceT<a>>
) => Wonka_types_sourceT<a>;
export declare const take: <a>(_1: number) => Wonka_types_operatorT<a, a>;
export declare const takeLast: <a>(_1: number) => Wonka_types_operatorT<a, a>;
export declare const takeUntil: <a, b>(_1: Wonka_types_sourceT<a>) => Wonka_types_operatorT<b, b>;
export declare const takeWhile: <a>(_1: (_1: a) => boolean) => Wonka_types_operatorT<a, a>;
