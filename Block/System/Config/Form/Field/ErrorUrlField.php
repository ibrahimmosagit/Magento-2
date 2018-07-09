<?php
/**
 * @package       ICEPAY Magento 2 Payment Module
 * @copyright     (c) 2016-2018 ICEPAY. All rights reserved.
 * @license       BSD 2 License, see LICENSE.md
 */

namespace Icepay\IcpCore\Block\System\Config\Form\Field;

use Magento\Framework\Data\Form\Element\AbstractElement;

class ErrorUrlField extends \Magento\Config\Block\System\Config\Form\Field
{

    protected function _getElementHtml(AbstractElement $element)
    {
        $store = $this->_storeManager->getStore();
        if ($store) {
            $element->setValue($store->getBaseUrl(\Magento\Framework\UrlInterface::URL_TYPE_LINK).'icepay/checkout/cancel');
        }

        $element->setReadonly('readonly');

        return $element->getElementHtml();
    }
}
