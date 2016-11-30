<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
?>
<div class="program-list equal-height__item">
<?php foreach ($fields as $id => $field): ?>
  <?php if ($field->class == 'field-tr-program-type'): ?>
    <div class="program-list__type">
      <?php print $field->content; ?>
    </div>
  <?php elseif ($field->class == 'nothing-1'): ?>
    <div class="program-list__title">
      <?php print $field->content; ?>
    </div>
  <?php elseif ($field->class == 'field-program-finder-description'): ?>
    <div class="program-list__description">
      <?php print $field->content; ?>
    </div>
  <?php elseif ($field->class == 'field-tr-location') :?>
    <div class="program-list__locations">
      <?php print $field->content; ?>
    </div>
  <?php elseif ($field->class == 'field-is-online') :?>
    <div class="program-list__online">
      <?php print $field->content; ?>
    </div>
  <?php elseif ($field->class == 'field-face-to-face') :?>
    <div class="program-list__face-to-face">
      <?php print $field->content; ?>
    </div>
  <?php elseif ($field->class == 'field-hybrid') :?>
    <div class="program-list__hybrid">
      <?php print $field->content; ?>
    </div>
  <?php else: ?>
    <?php print $field->wrapper_prefix; ?>
      <?php print $field->label_html; ?>
      <?php print $field->content; ?>
    <?php print $field->wrapper_suffix; ?>
  <?php endif; ?>
<?php endforeach; ?>

</div>
