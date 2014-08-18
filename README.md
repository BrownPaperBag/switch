switch
======

An angularjs directive providing a switch component to hang boolean values.

Example usage:

```HTML
<script src="bower_components/switch/js/switch.js"></script>

<switch ng-disabled ng-model="property" sw-state="-1" lb-left="Left Label" lb-right="Right Label" lb-unavailable="Unavailable Label"></switch>
```

or the simplest mode:

```HTML
<switch ng-model="property"></switch>

```

When:

- ng Model: Property to bind a boolean value coming from the directive.
- swState: State of the directive: unavailable (-1), loading (0), available (1).
- lbLeft: Label to show at left when the directive get state available.
- lbRight: Label to show at right when the directive get state available.
- lbUnavailable: Label to show when the directive get state unavailable.