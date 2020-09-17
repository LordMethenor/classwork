<?php
  class Glasses {
    public $owner;
    public $brand;
    public $lenscorrection;
    public $material;
    public function describe() {
      return "Owner: " . $this->owner . "<br>Brand: " . $this->brand . "<br>Lens Correction: " . $this->lenscorrection . "<br>Material: " . $this->material; 
    }
    public function correct($image) {
      return $image . " but less blurry for a " . $this->lenscorrection . " user.";
    }
  }
  class Sunglasses extends Glasses {
    public $shade;
    public function describe () {
      return parent::describe() . "<br>Tint: " . $this->shade;
    }
    public function correct($image) {
      return $image . " but " . $this->shade . " and less blurry for a " . $this->lenscorrection . " user.";
    }
  }
?>