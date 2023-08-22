import {__, setI18n, setI18nDebugMode, setI18nNotFoundReturnModeToEmpty, setI18nNotFoundReturnModeToKey} from "../src";

test('translations', () => {
  setI18n({
    lorem: 'Ipsum',
    dolor: {sit: {amet: 'dolor sit amet :hey'}}
  });

  setI18nDebugMode(false);

  expect(__('lorem')).toEqual('Ipsum');
  expect(__('dolor')).toEqual({sit: {amet: 'dolor sit amet :hey'}});
  expect(__('dolor', {hey: 'you'})).toEqual({sit: {amet: 'dolor sit amet :hey'}});
  expect(__('dolor.sit')).toEqual({amet: 'dolor sit amet :hey'});
  expect(__('dolor.sit.amet')).toEqual('dolor sit amet :hey');
  expect(__('dolor.sit.amet', {hey: 'you'})).toEqual('dolor sit amet you');
});

test('debugMode', () => {
  setI18n({
    lorem: 'Ipsum',
    dolor: {sit: {amet: 'dolor sit amet :hey'}}
  });

  setI18nDebugMode(true);

  expect(__('lorem')).toEqual('lorem');
  expect(__('dolor')).toEqual('dolor');
  expect(__('dolor', {hey: 'you'})).toEqual('dolor');
  expect(__('dolor.sit')).toEqual('dolor.sit');
  expect(__('dolor.sit.amet')).toEqual('dolor.sit.amet');
  expect(__('dolor.sit.amet', {hey: 'you'})).toEqual('dolor.sit.amet');
});

test('notFound', () => {
  setI18n({
    lorem: 'Ipsum',
    dolor: {sit: {amet: 'dolor sit amet :hey'}}
  });

  setI18nDebugMode(false);

  setI18nNotFoundReturnModeToKey();
  expect(__('lorem1')).toEqual('lorem1');

  setI18nNotFoundReturnModeToEmpty();
  expect(__('lorem1')).toEqual(undefined);
});
