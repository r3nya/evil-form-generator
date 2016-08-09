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
  * [ ] Simple layout
  * [ ] 'New form' btn
  * [ ] Item for forms
  * [ ] Getting data from `localStorage`
  * [ ] Loader

* [ ] `NewForm` container
  * [x] Dead simple layout
  * [x] Fields tab
    * [x] Btns
  * [ ] Description tab
    * [ ] TextArea
  * [ ] Items for:
    * [x] Single-line text field
    * [ ] CheckBoxes
    * [ ] RadioBtns
    * [ ] Select field
    * [x] File Upload
    * [ ] Paragraph Text Field
  * [ ] Ability to save form on `localStorage`

* [ ] `Browser` container
  * [ ] Get data for spec form from `localStorage`
  * [ ] Simple Layout for forms

## Components

* [ ] Loader
* [x] Alerts / Notifications
* [ ] Item for list (`AllForms` container)
* [ ] Tabs
* [x] Button
* [ ] Input
* [ ] CheckBox
* [ ] Radio btn
* [ ] TextArea


## Layout

* [ ] Header
* [ ] Footer
* [ ] 404 page
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
        title,
        choices: {
          type,
          values
        },
        required
      }
    ]
  }
]
```

… to be continued

🚀
