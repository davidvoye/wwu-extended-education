<?php
/**
 * @file
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layout. This layout supports the following sections:
 *   - $content['middle']: Content in the middle column.
 */
?>
<div class="wwu-ee-100-percent-column" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <?php print $content['middle']; ?>
</div>
