# Brain-games
[![Actions Status](https://github.com/neandreev/brain-games/workflows/Eslint/badge.svg)](https://github.com/neandreev/brain-games/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/0164fb3f8a235fd45970/maintainability)](https://codeclimate.com/github/neandreev/Brain-games/maintainability)

## Что это:
Набор из пяти command-line приложений, завязанных на математике

## Как это:
 - JS с минимумом библиотечных зависимостей
    - [lodash](https://github.com/lodash/lodash)
    - [readline-sync](https://github.com/anseki/readline-sync) (мини-библиотека, позволяющая получать текстовые данные от пользователя через консоль)
 - [Eslint](https://github.com/eslint/eslint)

## Как это работает:
```sh
Установка: (внутри директории с исходным кодом)
   make install
   make publish
   make link

Удаление: (внутри директории с исходным кодом)
   make unlink

Использование: (просто введите в терминале название одной из игры)
   brain-calc
   brain-even
   brain-gcd
   brain-prime
   brain-progressing
```

## Как это выглядит:
<img src="https://neandreev.ru/images/Brain-games.gif" alt="Brain-games" width="600"/>
