import { observableObserverT as $$observableObserverT } from '../shims/Js.shim';
import { observableSubscriptionT as $$observableSubscriptionT } from '../shims/Js.shim';
import { observableT as $$observableT } from '../shims/Js.shim';
import { sourceT as Wonka_types_sourceT } from '../../src/Wonka_types.gen';
export declare type observableSubscriptionT = $$observableSubscriptionT;
export declare type observableObserverT<a> = $$observableObserverT<a>;
export declare type observableT<a> = $$observableT<a>;
export declare const fromObservable: <a>(_1: observableT<a>) => Wonka_types_sourceT<a>;
export declare const toObservable: <a>(_1: Wonka_types_sourceT<a>) => observableT<a>;
