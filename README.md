# Mi/Vi
A scoring app for the card game Bela.
It serves as a playground for experimenting with different JavaScript tools.
It will be implemented as a mobile-first progressive web app.

## Wireframe
[[https://github.com/brankol/mi-vi/blob/master/wireframes/main.png|alt=wireframe]]

## Proposed data model
        {
            weAre: 'Mi',
            youAre: 'Vi',
            gamesById: {
                abc1: { we: 42, you: 140, total: 182 },
                abc2: { we: 92, you: 110, total: 202 },
            },
            setsById: {
                def1: {
                    games: ['abc1', 'abc2'],
                    winner: false/'we'/'you',
                    we: 134,
                    you: 250,
                }
            },
            sets: ['def1'],
            weScore: 0,
            youScore: 0,
            settings: {
                lang: 'en'
            }
        }
