switch
======

An angularjs directive providing a switch component to hang boolean values.

Example usage:

```HTML
<script src="bower_components/switch/directives/switch.js"></script>

<switch model="property" left-label="Left Label" right-label="Right Label" unavailable-label="Unavailable Label" isLoading="true"></switch>
```

or an alternative mode:

```HTML
<switch model="property" labels="{ left : 'Left Label', right : 'Right Label', unavailable : 'Unavailable' }" isLoading="true"></switch>

```

or a simpler mode:

```HTML
<switch model="property" labels="labels_property" isLoading="true"></switch>

```

or the simplest mode:

```HTML
<switch model="property"></switch>

```