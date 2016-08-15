# Todo 🤓

* [x] – Create skeleton for app
  * [x] EditorConfig
  * [x] Linters
  * [x] Babel
  * [x] PostCSS
  * [x] Webpack <3
  * [x] Router + `home` page
  * [x] Directories for app

## Containers

* [x] Create containers and routes: `all`, `new`, `viewer`

* [ ] `AllForms` container
  * [x] Simple layout
  * [x] 'New form' btn
  * [x] Item for forms
  * [x] Getting data from `localStorage`
  * [ ] Loader

* [ ] `NewForm` container
  * [x] Dead simple layout
  * [x] Fields tab
    * [x] Btns
  * [x] Description tab
    * [x] TextArea
  * [ ] Items for:
    * [x] Single-line text field
    * [x] CheckBoxes
    * [x] RadioBtns
    * [x] Select field
    * [x] File Upload
    * [ ] Paragraph Text Field
  * [x] Ability to save form on `localStorage`

* [ ] `Browser` container
  * [ ] Get data for spec form from `localStorage`
  * [ ] Simple Layout for forms

## Components

* [ ] Loader
* [x] Alerts / Notifications
* [ ] Item for list (`AllForms` container)
* [ ] Tabs
* [x] Button
* [x] Input
* [x] CheckBox
* [x] Radio btn
* [x] TextArea


## Layout

* [ ] Header
* [ ] Footer
* [x] 404 page
* [ ] Aria attrs

## Data spec

```
[
  {
    id,
    description,
    questions:
    [
      {
        id,
        title,
        type,
        choices: [
          values
        ],
        required
      }
    ]
  }
]
```

… to be continued

🚀
